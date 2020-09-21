import TableCell from "@material-ui/core/TableCell";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
        backgroundColor: theme.palette.action.selected,
    },
}))(TableCell);

export const useStyles = makeStyles({
    table: {
        minWidth: '90vw',
    },
    paginationCount: {
        padding: 0,
    },
    card: {
        margin: "10px",
        textAlign: 'left',
        minHeight: '440px'
    },
    media: {
        height: "180px"
    },
    cardContent: {
        height: "260px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    natContainer: {
        marginTop: "20px"
    },

});