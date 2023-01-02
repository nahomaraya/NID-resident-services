import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
      
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>  OTP Code Resent</DialogHeader>
        <DialogBody divider>
          Please check your phone or email
        </DialogBody>
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>OK</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}