import React from 'react';
import { Container } from '../';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Guillaume ELAMBERT</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made by{' '}
          <a href="https://github.com/guillaume-elambert" rel="noopener noreferrer" target="_blank">
            Guillaume Elambert
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" alt={`${name} logo`} aria-label={`follow me on ${name}`}>
            <img height="32" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);