import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        maxWidth: '100px',
        alignContent: "center",
        alignItems: "center",
        justifyContent: 'space-between',
        margin: "0"
    },
    header: {
        padding: '20px 0px',
        boxShadow: '0 0 10px 0 rgba(51,51,51,.33)'
    },
    imgLogo: {
        width: "30px",
    }
});