import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ToolSuggestionModal({ open, onOpenChange }: Props) {
  const [productName, setProductName] = useState("");
  const [productLink, setProductLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // V1: Just show toast, V2: Save to Supabase
    toast.success("Thanks! Always open to new tools 💫");
    
    // Reset & close
    setProductName("");
    setProductLink("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-md border-border/30">
        <DialogHeader>
          <DialogTitle>Suggest a tool</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Name of product *
            </label>
            <Input
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Linear, Notion..."
              className="bg-background/60"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Optional link
            </label>
            <Input
              type="url"
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
              placeholder="https://..."
              className="bg-background/60"
            />
          </div>
          
          <div className="flex gap-2 justify-end pt-2">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Send
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
