import { useState } from "react";

export enum UserType {
    SELLER = 'SELLER',
    CUSTOMER = 'CUSTOMER'
}

export type TUser = {
    name: string,
    email: string,
    userType: UserType.CUSTOMER
}

interface RegisterFormController {
    data: TUser,
    onChangeName: (value: string) => void;
    onChangeEmail: (value: string) => void;
}

const initialData: TUser = {
    name: '',
    email: '',
    userType: UserType.CUSTOMER
}

export const useRegisterForm = (): RegisterFormController => {
    const [data, setData] = useState<TUser>(initialData);

    const onChangeName = (value: string) => {
        setData((curr) => {
            return {
                ...curr,
                name: value
            }
        });
    }

    const onChangeEmail = (value: string) => {
        setData((curr) => {
            return {
                ...curr,
                email: value
            }
        });
    }

    return {
        data,
        onChangeName,
        onChangeEmail
    }
}