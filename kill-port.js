import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function killPort() {
  const port = 3456;
  console.log(`🔍 Searching for processes on port ${port}...`);

  try {
    if (process.platform === 'win32') {
      // Windows
      const { stdout } = await execAsync(`netstat -ano | findstr :${port}`);
      const lines = stdout.trim().split('\n');
      
      for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        
        if (pid && !isNaN(pid)) {
          try {
            await execAsync(`taskkill /F /PID ${pid}`);
            console.log(`✅ Killed process ${pid}`);
          } catch (err) {
            // Process might already be dead
          }
        }
      }
    } else {
      // macOS/Linux
      const { stdout } = await execAsync(`lsof -ti :${port}`);
      const pids = stdout.trim().split('\n');
      
      for (const pid of pids) {
        if (pid) {
          await execAsync(`kill -9 ${pid}`);
          console.log(`✅ Killed process ${pid}`);
        }
      }
    }
    
    console.log(`✨ Port ${port} is now free!`);
  } catch (error) {
    if (error.stdout === '' || error.stderr.includes('No tasks')) {
      console.log(`✅ Port ${port} is already free!`);
    } else {
      console.log(`⚠️ Could not kill processes: ${error.message}`);
    }
  }
}

killPort();
