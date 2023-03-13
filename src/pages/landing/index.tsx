import React, { ReactElement } from 'react'
import { Markets, WhatOurClientsSay, SimpleSteps, Signup } from '../home/_lazy-load'
import Hero from '../home/_hero'
import Trade from '../home/_trade'
import TradeTheWayYouLike from '../home/_trade-the-way-you-like'
import { Desktop, Mobile, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, Localize, localize } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

type SimpleStepContentTypes = {
    header: React.ReactElement
    text: React.ReactElement
    icon: ReactElement
}

const simple_step_content: SimpleStepContentTypes[] = [
    {
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds._t_" />
        ),
        icon: <img src={PractiseIcon} alt="Practise" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more._t_" />
        ),
        icon: <img src={TradeIcon} alt="Trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Get your funds quickly and easily. We support a variety of withdrawal options._t_" />
        ),
        icon: <img src={WithdrawIcon} alt="Withdraw" width="32" height="32" />,
    },
]

const Home = () => {
    return (
        <Layout is_ppc_redirect is_ppc>
            <SEO
                title={localize(
                    '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
                )}
                description={localize(
                    '_t_Deriv - An online trading platform that offers a wide selection of derivatives to trade on_t_',
                )}
                has_organization_schema
                no_index
            />
            <Hero is_ppc />
            <Desktop>
                <Trade is_ppc_redirect />
            </Desktop>
            <Mobile>
                <TradeTheWayYouLike is_ppc_redirect />
            </Mobile>
            <Markets is_ppc />
            <SimpleSteps
                content={simple_step_content}
                header={<Localize translate_text="_t_3 simple steps_t_" />}
                sign_up
            />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Home)
