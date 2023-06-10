export interface AlertRuel {
    display: boolean,
    severityType: 'error' | 'warning' | 'info' | 'success',
    message: string
  }

export type SignInRule = {
    First_Name: string,
    Last_Name: string
    Username : string
    Email: string,
    Password: string,
    Confirm_Password: string,
}
export type LogInRule = {
    Email: string,
    Password: string,
}

export type CommunityLogInRule = {
    Email : string,
    name : string,
}

export type ResultForAuth = {
    isValid : boolean;
    message : string;
}