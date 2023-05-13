import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography, Button } from '@mui/material';
import DialogWrapper from 'src/components/modal/dialog_wrapper';
import { useForm } from 'react-hook-form';
import { CModalIds } from 'src/constants';
import { FormInput } from 'src/components/hook_form';
import theme from 'src/theme';
// import { IPayloadLogin, IPayloadRegister } from 'src/types/auth';
import { useAppDispatch } from 'src/hooks';
// import { loginUser, registerUser } from 'src/redux_store/user/user_action';
import RegisterForm from '../register_dialog';
import { toastMessage } from 'src/utils/toast';
import { closeModal } from 'src/redux_store/common/modal/modal_slice';
import '../../../scss/_home.scss';

const schemaLogin = yup.object().shape({
    email: yup
        .string()
        .email('Email không hợp lệ')
        .required('Email không được bỏ trống.'),
    password: yup.string().required('Xin vui lòng nhập lại mật khẩu.').min(8),
});

const LoginForm = () => {
    // const dispatch = useAppDispatch();
    // const initLoginForm: IPayloadLogin = {
    //     email: '',
    //     password: '',
    // };

    const [isRegister, setIsRegister] = useState<boolean>(true);

    const { control, handleSubmit } = useForm({
        defaultValues: {},
        // defaultValues: initLoginForm,
        resolver: yupResolver(schemaLogin),
    });
    // const handleOnSubmit = (data: IPayloadLogin) => {
    //     dispatch(loginUser(data))
    //         .unwrap()
    //         .then(() => {
    //             toastMessage.success('Đăng nhập tài khoản thành công');
    //             dispatch(
    //                 closeModal({
    //                     modalId: CModalIds.login,
    //                 })
    //             );
    //         });
    // };

    // const handleOnSubmitRegister = (data: IPayloadRegister) => {
    //     const { email, password, fullName } = data;
    //     dispatch(
    //         registerUser({
    //             email,
    //             password,
    //             fullName,
    //         })
    //     )
    //         .unwrap()
    //         .then(() => {
    //             toastMessage.success('Đăng ký tài khoản thành công');
    //         });
    // };
    return (
        <DialogWrapper modalId={CModalIds.login} minWidth={875}>
            {/* <Box
                display="flex"
                component="form"
                sx={{
                    backgroundColor: '#fff',
                }}
            // onSubmit={handleSubmit(handleOnSubmit)}
            >
                <Box flex="1" p={2}>
                    <Box py={1}>
                        <Typography fontSize="18px" textAlign="center">
                            Người tìm việc
                        </Typography>
                        <Typography fontSize="20px" textAlign="center" fontWeight="600">
                            {isRegister
                                ? 'Đăng ký tài khoản'
                                : ' Đăng nhập'}
                        </Typography>
                    </Box>
                    {isRegister ? (
                        <RegisterForm
                            // onSubmit={handleOnSubmitRegister}
                            onSubmit={() => {
                                console.log('ok')
                            }}
                        />
                    ) : (
                        <>
                            <Box display="flex" flexDirection="column" gap={1.5} mb={2}>
                                <FormInput
                                    control={control}
                                    name="email"
                                    label="Địa chỉ email"
                                />

                                <FormInput
                                    control={control}
                                    type="password"
                                    name="password"
                                    label="Nhập mật khẩu"
                                />
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    py: 1.5,
                                    fontSize: '16px',
                                }}
                            >
                                Đăng nhập
                            </Button>
                        </>
                    )}

                    <Typography pt={2} pb={1} fontSize="16px" textAlign="end">
                        Bạn chưa có tài khoản?
                        <Typography
                            fontSize="16px"
                            sx={{
                                fontWeight: '600',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                },
                            }}
                            onClick={() => setIsRegister((pre) => !pre)}
                        >
                            {isRegister ? 'Đăng nhập ngay' : 'Đăng ký ngay'}
                        </Typography>
                    </Typography>
                </Box>
                <Box flex="1" height="395px">
                    <img
                        width="100%"
                        src="https://img.timvieckysu.com/2021/08/quy-trinh-tuyen-dung.jpg"
                        alt=""
                        height="100%"
                        style={{
                            display: 'block',
                        }}
                    />
                </Box>
            </Box> */}
            <div className={isRegister ? 'login' : 'login right-panel-active'}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={() => setIsRegister((pre) => !pre)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={() => setIsRegister((pre) => !pre)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </DialogWrapper>
    );
};

export default LoginForm;
