import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content: string;
  handleConfirm: () => void;
}

export default function ConfirmationDialog(props: IProps) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={props.handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
