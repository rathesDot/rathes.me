import React from "react"
import styled from "styled-components"

import { TextBody, TextSmall } from "../Typography"
import Link from "../Link"

import "./styles.css"

const Separator = styled.span`
  width: 24px;
  display: block;
  margin: 16px 0;
  height: 2px;
  background-color: ${props => props.theme.colors.black.lighter};
`

const Title = styled(TextSmall)`
  display: block;
  letter-spacing: ${props => props.theme.letterSpacing.wide};
  line-height: 1.166666666;
`

const Info = styled(Link)`
  font-weight: 600;
  line-height: 1.1875;
  display: block;
  margin-top: 5px;
`

const OverviewInfo = () => (
  <ul className="flex justify-between my-16 overview-info md:max-w-sm">
    <li>
      <Separator />
      <Title color="silver">Working at</Title>
      <Info color="white" href="https://www.teamleader.eu/" element={TextBody}>
        Teamleader
      </Info>
    </li>
    <li>
      <Separator />
      <Title color="silver">Living in</Title>
      <Info
        color="white"
        element={TextBody}
        href="https://goo.gl/maps/9kKByTYJhSz"
      >
        Ghent, BE
      </Info>
    </li>
    <li>
      <Separator />
      <Title color="silver">Follow me</Title>
      <Info
        color="white"
        element={TextBody}
        href="https://twitter.com/rswebdesigner"
      >
        @rswebdesigner
      </Info>
    </li>
  </ul>
)

export default OverviewInfo
