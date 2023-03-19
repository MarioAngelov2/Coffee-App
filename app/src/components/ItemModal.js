import React from "react";
import "../styles/ItemModal.css";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

function ItemModal({ coffee, onClose }) {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <div className="modal-container">
          <div className="modal-content">
            <div
              className="backround-image"
              style={{ backgroundImage: `url(${coffee.imageUrl})` }}
            ></div>
            <h1>{coffee.name}</h1>
            <p>{coffee.price}</p>
            <Button
              variant="outlined"
              startIcon={<CloseIcon />}
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Stack>
    </ThemeProvider>
  );
}

export default ItemModal;
