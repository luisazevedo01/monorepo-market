import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField
} from "@mui/material"

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

function AddProductModal({ open, handleClose }: ModalProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-center">Adicionar Produto</DialogTitle>
            <DialogContent>
                <DialogContentText className="text-center" padding={1}>
                    Adiciona um produto que tenhas em stock para que outras pessoas o possam comprar!
                </DialogContentText>
                <Grid container direction="column" padding="0 5rem">
                    <TextField

                        autoFocus
                        id="title"
                        margin="normal"
                        label="Title"
                        type="text"
                        variant="standard"
                    />
                    <TextField

                        autoFocus
                        id="title"
                        margin="normal"
                        label="Price"
                        type="text"
                        variant="standard"
                    />
                    <TextField

                        autoFocus
                        id="title"
                        margin="normal"
                        label="Owner"
                        type="text"
                        variant="standard"
                    />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="success" variant="outlined" onClick={handleClose}>Cancelar</Button>
                <Button color="success" variant="outlined" onClick={handleClose}>Adicionar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddProductModal