import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  DialogActions,
} from '@mui/material';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import text from './OverlayText.json';
import DialogThemeProvider from './OverlayThemeConfig';

const OVERLAY_LOAD_SESSION_STORAGE = "overlayLoad";

const OverlayWindow = () => {
  const [open, setOpen] = useState(false);
  

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(OVERLAY_LOAD_SESSION_STORAGE, "true");
  };

  useEffect(() => {
    if (!sessionStorage.getItem(OVERLAY_LOAD_SESSION_STORAGE)) {
      setOpen(true);
    }
  }, []);

  const content = text.content.map((item, index) => (
    <DialogContentText id="alert-dialog-description" key={`dialog-content-${index}`}>
      {item}
    </DialogContentText>
  ));
  const list = text.list.map((item, index) => (
    <ListItem key={`text-list-item-${index}`}>
      <ListItemIcon>
        <FiberManualRecord style={{ fontSize: 8 }} />
      </ListItemIcon>
      <ListItemText>
        {item}
      </ListItemText>
    </ListItem>
  ));

  return (
    <>
      <div>
        <DialogThemeProvider>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
          >
            <DialogTitle id="alert-dialog-title">
              Warning
            </DialogTitle>
            <Divider />
            <DialogContent>
              {content}
              <span>{' By using this system, you understand and consent to the following: '}</span>
              <List>
                {list}
              </List>
            </DialogContent>
            <Divider />
            <DialogActions>
              <Button onClick={handleClose}>
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </DialogThemeProvider>
      </div>
    </>
  );
};

export default OverlayWindow;
