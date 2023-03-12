import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsFingerprint } from 'react-icons/bs';
import { GrFingerPrint } from 'react-icons/gr';

const PasswordInput = ({ placeholder, value, onChange, onPaste, name }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    return (

        <div className="form__input-group group-icon">
            <input type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onPaste={onPaste}
            />
            <div className="form_icon"
                onClick={togglePassword}>
                {showPassword ? (
                    <BsFingerprint size={20} />
                ) : (
                    <GrFingerPrint size={20} />
                )}
            </div>
        </div>
    )
}

export default PasswordInput;