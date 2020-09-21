import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    card: {
        margin: "10px",
        textAlign: "left",
        minHeight: "440px",
    },
    media: {
        height: "180px",
    },
    cardContent: {
        height: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    natContainer: {
        marginTop: "20px",
    },
});