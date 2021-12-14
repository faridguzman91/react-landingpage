import React, { useState } from 'react';
import { IntlProvider } from 'react-intl'
import Layout from './Layout'
import Data from './Data';
import 'sidebar.styles.scss'

function ProSidebar() {
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Layout setLocale={setLocale} />
        </IntlProvider>
    )
}