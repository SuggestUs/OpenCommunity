import { CommunityLogInRule, ResultForAuth } from '../utils/type'
export const communityLoginInValidation = (obj: CommunityLogInRule ): ResultForAuth => {

    const values = Object.values(obj);
    // Validation for all keys 
    for (var x in values) {

        if (!values[x]) {
            return {
                isValid: false,
                message: "Please Enter both Email and Password"
            }
        }

    }
    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(obj.Email)) {
        return {
            isValid: false,
            message: "Please Enter the correct Email"
        }
    }
    return {
        isValid: true,
        message: ""
    }

}

export const somthoing = '';