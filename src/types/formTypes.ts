

interface formPageProps {
    page: number;
    changePage: React.Dispatch<React.SetStateAction<number>>;
}

interface formStateInterface{
    firstName:string;
    lastName:string;
    email:string;
    password: string;
    confirmPassword:string;
}

export {formPageProps, formStateInterface }