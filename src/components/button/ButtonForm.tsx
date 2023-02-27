import  React from 'react'
import {Button} from "@mui/material";

const ButtonForm = (props: {text: string}) => {
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth={true}
                disableElevation={true}
                sx={{
                    marginTop: 2,
                    borderRadius: 2
                }}
            >
                {props.text}
            </Button>
        </div>
    );
}

export default ButtonForm;
