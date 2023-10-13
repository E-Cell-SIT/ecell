import { TextField, withStyles } from "@material-ui/core";

const TextInput = withStyles({
    root: {
        "& label": {
            color: "#ffffff",
        },
        "& label.Mui-focused": {
            color: "##051640",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "##051640",
        },
        "& .MuiInputBase-input": {
            color: "#ffffff !important",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#dddddd",
                borderRadius: "25px",
            },
            "&:hover fieldset": {
                borderColor: "##051640",
            },
            "&.Mui-focused fieldset": {
                borderColor: "##051640",
            },
        },
    },
})(TextField);

export default TextInput;