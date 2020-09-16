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
        minWidth: 400,
    },
    paginationCount: {
        padding: 0,
    },

});