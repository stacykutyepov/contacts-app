import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    style: {
        backgroundColor: (props) => props.backgroundColor,
        color: "white",
        padding: "6px",
    },
    secondStyle: {
        color: (props) => props.color,
    },
});