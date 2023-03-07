import React from 'react'
import styled from 'styled-components'

import {AppNavi, Text, SmartHRLogo, FaBullhornIcon, FaCalendarAltIcon, ThemeProvider} from 'smarthr-ui'

import LocaleSelector, {Props as LocaleSelectorProps} from './LocaleSelector'
import createdTheme from './Constants'

interface Props {
  current: string
  rootLink: string
  schedulesLink: string
  plansLink?: string
  locales: LocaleSelectorProps
  i18n: {
    label: string
    rootButton: string
    scheduleButton: string
    plansButton: string
    help: string
  }
}

export const Navigation: React.FC<Props> = (props) => {
  const {current, locales, i18n} = props

  return (
    <ThemeProvider theme={createdTheme}>
      <Nav>
        <Container>
          <RubyKaigiLogo/>
          <CenteredWrapper>
            <MarginWrapper>
              <Text>Schedule.select</Text>
            </MarginWrapper>
            <PoweredByWrapper>
              <Text size="S">powered by</Text>
              <SmartHRLogo width={95}/>
            </PoweredByWrapper>
          </CenteredWrapper>
        </Container>
      </Nav>
      <AppNavi
        label={i18n.label}
        buttons={generateNaviButton(props, current)}
      >
        <Child><LocaleSelector {...locales} /></Child>
      </AppNavi>
    </ThemeProvider>
  )
}

const generateNaviButton = (props: Props, current: string) => {
  const buttons = []

  buttons.push({
    children: props.i18n.rootButton,
    current: current === null,
    href: props.rootLink,
  })

  buttons.push({
    children: props.i18n.scheduleButton,
    current: current === "schedules",
    icon: FaBullhornIcon,
    href: props.schedulesLink,
  })

  if (!!props.plansLink) {
    buttons.push(
      {
        children: props.i18n.plansButton,
        current: current === "plans",
        icon: FaCalendarAltIcon,
        href: props.plansLink
      }
    )
  }

  return buttons
}

export default Navigation

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #ba083d;
  height: 50px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 16px;
  color: #FFF;
`

const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MarginWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 8px;
`

const PoweredByWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 12px;
  margin-bottom: 2px;
`

const Child = styled.div`
  margin: 0 0 0 auto;
`

const RubyKaigiLogo: React.VFC<{}> = () => {
  return (
    <svg width="152" height="19" viewBox="0 0 152 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="cls-1"
          d="M8.49,14.98l-2.57-3.71H3.08v3.71H0V1.66H5.77c1.18,0,2.2,.2,3.07,.59,.87,.39,1.54,.95,2.01,1.67s.7,1.58,.7,2.57-.24,1.84-.71,2.56c-.48,.72-1.15,1.27-2.03,1.65l2.99,4.28h-3.31Zm-.78-10.21c-.48-.4-1.19-.6-2.11-.6H3.08v4.64h2.51c.93,0,1.63-.2,2.11-.61,.48-.41,.72-.98,.72-1.71s-.24-1.32-.72-1.72Z"
          fill="white"/>
      <path className="cls-1"
          d="M23.71,4.74V14.98h-2.82v-1.22c-.39,.44-.86,.78-1.41,1.02-.55,.23-1.14,.35-1.77,.35-1.35,0-2.41-.39-3.2-1.16-.79-.77-1.18-1.92-1.18-3.44V4.74h2.97v5.35c0,1.65,.69,2.47,2.07,2.47,.71,0,1.28-.23,1.71-.69,.43-.46,.65-1.15,.65-2.06V4.74h2.97Z"
          fill="white"/>
      <path className="cls-1"
          d="M34.74,5.24c.78,.44,1.39,1.05,1.84,1.85,.44,.79,.67,1.72,.67,2.77s-.22,1.98-.67,2.77c-.44,.79-1.06,1.41-1.84,1.85-.78,.44-1.65,.66-2.6,.66-1.41,0-2.48-.44-3.22-1.33v1.18h-2.84V.86h2.97V5.82c.75-.82,1.78-1.24,3.08-1.24,.95,0,1.82,.22,2.6,.66Zm-1.24,6.68c.49-.51,.73-1.2,.73-2.06s-.24-1.55-.73-2.06-1.11-.77-1.87-.77-1.39,.26-1.87,.77-.73,1.2-.73,2.06,.24,1.55,.73,2.06,1.11,.77,1.87,.77,1.39-.26,1.87-.77Z"
          fill="white"/>
      <path className="cls-1"
          d="M49.38,4.74l-4.62,10.87c-.47,1.18-1.05,2.01-1.74,2.49-.69,.48-1.53,.72-2.5,.72-.53,0-1.06-.08-1.58-.25-.52-.16-.95-.39-1.28-.68l1.08-2.11c.23,.2,.49,.36,.79,.48,.3,.11,.59,.17,.88,.17,.41,0,.74-.1,.99-.29,.25-.2,.48-.52,.69-.98l.04-.1-4.43-10.31h3.06l2.87,6.95,2.89-6.95h2.85Z"
          fill="white"/>
      <path className="cls-1"
          d="M55.28,9.74l-1.79,1.87v3.37h-3.06V1.66h3.06V7.88l5.9-6.22h3.43l-5.52,5.94,5.84,7.38h-3.6l-4.26-5.23Z"
          fill="white"/>
      <path className="cls-1"
          d="M72.08,5.72c.85,.75,1.28,1.89,1.28,3.42v5.84h-2.78v-1.27c-.56,.95-1.6,1.43-3.12,1.43-.79,0-1.47-.13-2.05-.4-.58-.27-1.02-.63-1.32-1.1-.3-.47-.46-1-.46-1.6,0-.95,.36-1.7,1.08-2.25,.72-.55,1.82-.82,3.32-.82h2.36c0-.65-.2-1.14-.59-1.49-.39-.35-.98-.52-1.77-.52-.55,0-1.08,.09-1.61,.26-.53,.17-.97,.4-1.34,.69l-1.07-2.07c.56-.39,1.23-.7,2.01-.91s1.58-.32,2.41-.32c1.59,0,2.8,.38,3.65,1.13Zm-2.53,7.06c.39-.23,.67-.58,.84-1.04v-1.05h-2.04c-1.22,0-1.83,.4-1.83,1.2,0,.38,.15,.68,.45,.9,.3,.22,.71,.33,1.23,.33s.96-.12,1.35-.35Z"
          fill="white"/>
      <path className="cls-1"
          d="M76.19,2.84c-.34-.32-.51-.71-.51-1.18s.17-.86,.51-1.18c.34-.32,.79-.48,1.33-.48s.99,.15,1.33,.46c.34,.3,.51,.69,.51,1.14,0,.49-.17,.9-.51,1.23-.34,.32-.79,.49-1.33,.49s-.99-.16-1.33-.48Zm-.15,1.9h2.97V14.98h-2.97V4.74Z"
          fill="white"/>
      <path className="cls-1"
          d="M92.71,4.74V13.26c0,1.88-.49,3.27-1.47,4.19-.98,.91-2.4,1.37-4.28,1.37-.99,0-1.93-.12-2.82-.36-.89-.24-1.62-.59-2.21-1.05l1.18-2.13c.43,.35,.98,.64,1.64,.85,.66,.21,1.32,.31,1.98,.31,1.03,0,1.79-.23,2.27-.69,.49-.46,.73-1.16,.73-2.1v-.44c-.77,.85-1.85,1.27-3.24,1.27-.94,0-1.8-.21-2.58-.62-.78-.41-1.4-.99-1.86-1.74-.46-.75-.68-1.61-.68-2.59s.23-1.84,.68-2.59c.46-.75,1.08-1.33,1.86-1.74,.78-.41,1.64-.62,2.58-.62,1.48,0,2.61,.49,3.39,1.47v-1.31h2.82Zm-3.68,6.61c.5-.46,.75-1.07,.75-1.82s-.25-1.35-.75-1.82c-.5-.46-1.15-.69-1.93-.69s-1.43,.23-1.94,.69-.76,1.07-.76,1.82,.25,1.35,.76,1.82,1.15,.69,1.94,.69,1.43-.23,1.93-.69Z"
          fill="white"/>
      <path className="cls-1"
          d="M95.62,2.84c-.34-.32-.51-.71-.51-1.18s.17-.86,.51-1.18c.34-.32,.79-.48,1.33-.48s.99,.15,1.33,.46c.34,.3,.51,.69,.51,1.14,0,.49-.17,.9-.51,1.23-.34,.32-.79,.49-1.33,.49s-.99-.16-1.33-.48Zm-.15,1.9h2.97V14.98h-2.97V4.74Z"
          fill="white"/>
      <path className="cls-1"
          d="M115.15,12.46v2.51h-10.07v-2l5.14-4.85c.55-.52,.91-.97,1.1-1.34,.19-.37,.29-.75,.29-1.11,0-.53-.18-.94-.54-1.23-.36-.29-.89-.43-1.59-.43-.58,0-1.11,.11-1.58,.33-.47,.22-.86,.56-1.18,1l-2.25-1.45c.52-.77,1.24-1.38,2.15-1.82s1.96-.66,3.14-.66c.99,0,1.86,.16,2.6,.49,.74,.32,1.32,.78,1.73,1.37s.62,1.28,.62,2.08c0,.72-.15,1.4-.46,2.04s-.89,1.36-1.77,2.17l-3.06,2.89h5.73Z"
          fill="white"/>
      <path className="cls-1"
          d="M119.18,14.39c-.86-.55-1.54-1.34-2.03-2.37-.49-1.03-.73-2.27-.73-3.7s.24-2.67,.73-3.7c.49-1.03,1.16-1.82,2.03-2.37,.86-.55,1.85-.82,2.95-.82s2.09,.27,2.95,.82c.86,.55,1.54,1.34,2.03,2.37,.49,1.03,.73,2.27,.73,3.7s-.24,2.67-.73,3.7c-.49,1.03-1.16,1.82-2.03,2.37-.86,.55-1.85,.82-2.95,.82s-2.09-.27-2.95-.82Zm4.86-2.84c.46-.7,.69-1.78,.69-3.24s-.23-2.54-.69-3.24c-.46-.7-1.1-1.05-1.91-1.05s-1.43,.35-1.89,1.05c-.46,.7-.69,1.78-.69,3.24s.23,2.54,.69,3.24c.46,.7,1.09,1.05,1.89,1.05s1.45-.35,1.91-1.05Z"
          fill="white"/>
      <path className="cls-1"
          d="M139.3,12.46v2.51h-10.07v-2l5.14-4.85c.55-.52,.91-.97,1.1-1.34,.19-.37,.29-.75,.29-1.11,0-.53-.18-.94-.54-1.23-.36-.29-.89-.43-1.59-.43-.58,0-1.11,.11-1.58,.33-.47,.22-.86,.56-1.18,1l-2.25-1.45c.52-.77,1.24-1.38,2.15-1.82s1.96-.66,3.14-.66c.99,0,1.86,.16,2.6,.49,.74,.32,1.32,.78,1.73,1.37s.62,1.28,.62,2.08c0,.72-.15,1.4-.46,2.04s-.89,1.36-1.77,2.17l-3.06,2.89h5.73Z"
          fill="white"/>
      <path className="cls-1"
          d="M150.24,8.38c.62,.68,.93,1.52,.93,2.52,0,.77-.2,1.49-.61,2.14-.41,.65-1.03,1.18-1.86,1.57-.83,.39-1.85,.59-3.05,.59-.94,0-1.86-.12-2.77-.37-.91-.25-1.68-.6-2.31-1.06l1.2-2.36c.51,.38,1.09,.68,1.76,.88,.67,.21,1.35,.31,2.05,.31,.77,0,1.38-.15,1.83-.45,.44-.3,.67-.72,.67-1.27,0-1.09-.83-1.64-2.49-1.64h-1.41v-2.04l2.74-3.1h-5.67V1.66h9.32v2l-3.01,3.43c1.17,.19,2.06,.63,2.68,1.3Z"
          fill="white"/>
    </svg>

  )
}
