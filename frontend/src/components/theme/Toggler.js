import { func, string } from 'prop-types';
import styled from "styled-components";

const DarkToggleButton = styled.a`
    margin-right: 2.1rem;
    text-align: end;
    padding-right: 4.5rem;
    color: ${({ theme }) => theme.color};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <DarkToggleButton onClick={toggleTheme} >
            <i id="moonIcon"
                className="bx bxs-moon bx-sm hoverbale" />
        </DarkToggleButton>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;