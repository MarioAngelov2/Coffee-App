import React, { useState, useEffect, useContext } from "react";
import { deleteItem } from "../services/deleteService";
import { useNavigate } from "react-router-dom";
import { CatalogStateContext } from "../context/DataContext";
import { AuthContext } from "../context/AuthContext";

import "../styles/ItemModal.css";

import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

function ItemModal({ coffee, onClose }) {
  const navigate = useNavigate();
  const { item, setItem } = useContext(CatalogStateContext);
  const { user } = useContext(AuthContext);

  const handleDelete = (itemId) => {
    deleteItem(itemId);
    const updateItems = item.filter((item) => item._id !== itemId);
    setItem(updateItems);
    navigate("/catalog");
    onClose();
  };

  const isOwner = user && user._id === item._ownerId;

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
            <div className="buttons-container">
              <Button
                variant="outlined"
                startIcon={<CloseIcon />}
                onClick={onClose}
              >
                Close
              </Button>

              {isOwner ? (
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  disabled={true}
                >
                  Delete
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleDelete(coffee._id);
                  }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        </div>
      </Stack>
    </ThemeProvider>
  );
}

export default ItemModal;
