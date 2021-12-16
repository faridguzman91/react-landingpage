import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';
import NewProjectPage from '../../components/NewProject/index.js'
import SignUpPage from '../../components/SignUp'


const Main = ({
    collapsed,
    handleToggleSidebar,
    handleCollapsedChange,

}) => {
    const intl = useIntl();
    return (
        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            <div className="block ">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleCollapsedChange}
                    checked={collapsed}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span>Collapse Sidebar</span>
            </div>

            <SignUpPage />
            <NewProjectPage />



            <footer>

            </footer>
        </main>
    );
};

export default Main;
