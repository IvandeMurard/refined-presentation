import { useRef, useState, useEffect } from 'react';

export function useLightAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = async (id: string, src: string) => {
    if (currentId === id && audioRef.current) {
      // toggle pause
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentId(null);
      return;
    }
    // stop previous
    audioRef.current?.pause();
    audioRef.current = new Audio(encodeURI(src));
    audioRef.current.onended = () => {
      setIsPlaying(false);
      setCurrentId(null);
    };
    try {
      await audioRef.current.play();
      setCurrentId(id);
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setCurrentId(null);
    }
  };

  const stop = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setCurrentId(null);
  };

  useEffect(() => () => audioRef.current?.pause(), []);

  return { currentId, isPlaying, play, stop };
}
