import React from "react";
import StatisticCard from "../../components/statisticCard";
import {
  Container,
  Heading,
  HeadingWithIcon,
  Row,
  Section,
} from "./index.styled";
import TransactionsIcon from "../../assets/images/transaction.png";
import UserIcon from "../../assets/images/user.png";
import DollarIcon from "../../assets/images/dollar.png";

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Section>
        <HeadingWithIcon>
          <Heading>Transactions</Heading>
          <img src={TransactionsIcon} alt="" width="30" height="30" />
        </HeadingWithIcon>

        <Row>
          <StatisticCard label="Transactions per day." number="176" />
          <StatisticCard label="Transactions per week." number="530" />
          <StatisticCard label="Transactions per month." number="1490" />
          <StatisticCard label="Average transaction size." number="$2000" />
        </Row>
      </Section>
      <Section>
        <HeadingWithIcon>
          <Heading>Merchant Profiles</Heading>
          <img src={UserIcon} alt="" width="30" height="30" />
        </HeadingWithIcon>
        <Row>
          <StatisticCard label="Total no of merchants." number="176" />
          <StatisticCard label="Total no of verified merchants." number="100" />
          <StatisticCard
            label="Total no of unverified merchants."
            number="76"
          />
          <StatisticCard label="No of merchants joined today." number="5" />
          <StatisticCard
            label="No of merchants joined this week."
            number="30"
          />
          <StatisticCard
            label="No of merchants joined this month."
            number="100"
          />
          <StatisticCard
            label="No of merchants joined this year."
            number="3457"
          />
          <StatisticCard
            label="Average no of subaccounts created by marchants."
            number="50"
          />
        </Row>
      </Section>
      <Section>
        <HeadingWithIcon>
          <Heading>Fee</Heading>
          <img src={DollarIcon} alt="" width="30" height="30" />
        </HeadingWithIcon>
        <Row>
          <StatisticCard label="Fee submitted per day." number="176" />
          <StatisticCard label="Fee submitted per week." number="530" />
          <StatisticCard label="Fee submitted per month." number="1490" />
          <StatisticCard label="Average fee size." number="$2000" />
        </Row>
      </Section>
    </Container>
  );
}
