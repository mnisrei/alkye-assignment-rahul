import React from 'react'
import PasswordInput from '../../components/password-input'
import useAuthHook from '../../hooks/auth/useAuthHook';
import Input from '../../components/input';
import Button from '../../components/button';
import { authFlowDetails } from '../../constants';

function LoginFirstStep() {
    const { authState, handleOnChangeInput, onSubmitData } = useAuthHook()
    if (authState?.loading) return <span className='text-black'>Loading...</span>
    return (
        <div className='flex flex-col gap-12 lg:gap-24'>
            <div className='flex flex-col sm:flex-row gap-12 lg:gap-24'>
                <div className='w-full sm:w-1/2 flex flex-col items-start text-left gap-2'>
                    <span className='text-xs md:text-lg lg:text-2xl font-medium leading-6 lg:leading-[50px]'>STEP {authState?.currentStepValue}</span>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-6 lg:leading-[55px]'>
                        {authFlowDetails[authState?.currentStep]?.title}
                    </h1>
                    <span className='text-xs md:text-lg lg:text-2xl font-medium leading-6 lg:leading-[50px]'>
                        {authFlowDetails[authState?.currentStep]?.subtitle}
                    </span>
                </div>
                <div className='flex flex-col w-full sm:w-1/2 items-start gap-6'>
                    {authState?.currentStep === "password" && <PasswordInput
                        inputValue={authState?.password}
                        setInputValue={(value) => handleOnChangeInput({ stateValue: "password", value })}
                        error={authState?.error?.password}
                    />
                    }
                    {authState?.currentStep === "email" && <Input
                        inputValue={authState?.email}
                        setInputValue={(value) => handleOnChangeInput({ stateValue: "email", value })}
                    />
                    }
                    <div className='w-full gap-3 flex items-start md:items-center'>
                        {
                            !!authFlowDetails[authState?.currentStep]?.conditions && <span className='text-start text-[#4E4E4E] text-xs sm:text-sm underline'>
                                {authFlowDetails[authState?.currentStep]?.conditions}
                            </span>
                        }
                        <Button className='ml-auto' onClick={() => onSubmitData({ currentState: authState?.currentStep })}>
                            {authFlowDetails[authState?.currentStep]?.btnText}
                        </Button>
                    </div>
                </div>
            </div>
            {
                !!authFlowDetails[authState?.currentStep]?.tncInfo && <span className='text-[10px] sm:text-sm font-light text-start'>
                    {authFlowDetails[authState?.currentStep]?.tncInfo}
                </span>
            }
        </div>
    )
}

export default LoginFirstStep