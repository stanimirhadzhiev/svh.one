


export const emailValidator = (e, setError) => {
    if (![e.target.value]) {
         setError({email: "Email is required"});
        // return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test([e.target.value])) {
         setError({email: "Incorrect email format"});
        // return "Incorrect email format";
    }else{
         setError( {email: ""});
    }
    console.log([e]);
};


export const passwordValidator = (password, setError) => {
    if (!password) {
        setError("Password is required");
    } else if (password.length < 8) {
        setError("Password must have a minimum 8 characters");
    }
    setError("");
};

export const confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
        return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
        return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== form.password) {
        return "Passwords do not match";
    }
    return "";
};

export const urlValidator = (url, setError) => {
    if (!url) {
        setError({url: "Url is required"});
        // return "Email is required";
    } else if (!new RegExp(/^(ftp|http|https):\/\/[^ "]+$/).test(url)) {
        setError({url: "Incorrect url format"});
        // return "Incorrect email format";
    }else{
        setError({url: ""});
    }
};