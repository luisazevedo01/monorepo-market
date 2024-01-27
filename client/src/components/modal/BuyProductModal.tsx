import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField
} from "@mui/material"

interface BuyProductModalProps {
    product: unknown;
    open: boolean;
    handleClose: () => void;
}

function BuyProductModal({ open, handleClose, product }: BuyProductModalProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-center">{(product as { title: string })["title"]}</DialogTitle>
            <DialogContent>
                <Grid container direction="column" padding="0 5rem">
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="success" variant="outlined" onClick={handleClose}>Cancel</Button>
                <Button color="success" variant="outlined" onClick={handleClose}>Add to cart!</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BuyProductModal