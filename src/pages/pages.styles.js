import { makeStyles } from "@material-ui/core/styles";

export const pagesStyles = makeStyles({
    container: {
        margin: "40px 0px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    contacts: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90vw',
        alignContent: 'center'
    }
});