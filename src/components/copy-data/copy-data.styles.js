import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        fontSize: '1rem',
        backgroundColor: theme.palette.common.black,
    },
}));

export const styles = makeStyles({
    container: {
        display: 'flex',
        maxWidth: '200px',
        alignItems: "center"
    }
});