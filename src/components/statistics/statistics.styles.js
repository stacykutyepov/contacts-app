import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    container: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        width: '90vw',
        padding: "10px"
    },
    statisticData: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-start",
        marginRight: "20px"
    },
    containerRow: {
        display: 'flex',
        maxWidth: '600px',
        ['@media (max-width:480px)']: { // eslint-disable-line no-useless-computed-key
            flexDirection: 'column'
        }
    },
    number: {
        fontSize: '1.5rem'
    },
    predominate: {
        backgroundColor: '#ffe58f'
    }
});