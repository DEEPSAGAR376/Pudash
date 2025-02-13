import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function ExampleDialog() {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>
            This is an example dialog with a description to address the accessibility warning.
          </DialogDescription>
        </DialogHeader>
        {/* Dialog content goes here */}
      </DialogContent>
    </Dialog>
  )
}

