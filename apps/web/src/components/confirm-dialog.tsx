import { PropsWithChildren, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

type Props = {
  label?: string;
  trigger?: JSX.Element;
  title?: string;
  description?: string | JSX.Element;
  onConfirm: () => void;
  onCancel?: () => void;
  dialogBody?: JSX.Element;
  open: boolean;
  onOpenChange: (value: boolean) => void;
};
export function ConfirmDialog({
  title,
  onConfirm,
  onCancel,
  label,
  description,
  dialogBody,
  open,
  onOpenChange,
}: PropsWithChildren<Props>) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <h2 className="font-medium">{title ? title : "Are you sure?"}</h2>
          <div className="text-slate-600">
            {description ? description : "Are you sure you want to continue?"}
          </div>
        </DialogHeader>
        {dialogBody}
        <div className="flex items-center justify-end gap-2">
          <Button
            onClick={() => {
              onCancel && onCancel();
              onOpenChange(false);
            }}
            type="button"
            variant={"ghost"}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              onConfirm();
            }}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
