import React, { useState } from 'react';
import { IntlProvider } from 'react-intl'
import Layout from './Layout'
import Data from './Data';
import 'sidebar.styles.scss'

function ProSidebar() {

    const [locale, setLocale] = useState('en');
    return (
        <IntlProvider locale={locale} Data={Data[locale]}>
            <Layout setLocale={setLocale} />
        </IntlProvider>
    )
}

export default ProSidebar