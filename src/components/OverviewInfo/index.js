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
      <Link
        color="white"
        className=" text-base font-bold xs:text-lg"
        href="https://www.teamleader.eu/"
      >
        Teamleader
      </Link>
    </li>
    <li>
      <Separator />
      <Title color="silver">Living in</Title>
      <Link
        color="white"
        className="text-base font-bold xs:text-lg"
        href="https://goo.gl/maps/9kKByTYJhSz"
      >
        Ghent, BE
      </Link>
    </li>
    <li>
      <Separator />
      <Title color="silver">Follow me</Title>
      <Link
        color="white"
        className="text-base font-bold xs:text-lg"
        href="https://twitter.com/rswebdesigner"
      >
        @rswebdesigner
      </Link>
    </li>
  </ul>
)

export default OverviewInfo
