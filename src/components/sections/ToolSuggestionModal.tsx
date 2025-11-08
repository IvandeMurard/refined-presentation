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
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const suggestionSchema = z.object({
  product_name: z.string().trim().min(1, "Name is required").max(100),
  product_link: z.string().trim().url("Must be a valid URL").optional().or(z.literal("")),
});

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ToolSuggestionModal({ open, onOpenChange }: Props) {
  const [productName, setProductName] = useState("");
  const [productLink, setProductLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);

      // Validate input
      const validated = suggestionSchema.parse({
        product_name: productName,
        product_link: productLink || undefined,
      });

      // Save to database
      const { error } = await supabase
        .from("tool_suggestions")
        .insert({
          product_name: validated.product_name,
          product_link: validated.product_link || null,
        });

      if (error) throw error;

      toast.success("Thanks! Always open to new tools 💫");
      
      // Reset & close
      setProductName("");
      setProductLink("");
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to submit suggestion. Please try again.");
        console.error("Suggestion error:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
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
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
