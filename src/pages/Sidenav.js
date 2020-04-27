import React from 'react'
import PropTypes from 'prop-types'

import StyledSidenavContainer from '../StyledComps/StyledSidenavContainer'
import StyledSidenavInfo from '../StyledComps/StyledSidenavInfo'
import StyledChangeThemeButton from '../StyledComps/StyledChangeThemeButton'
import StyledSocialMediaContainer from '../StyledComps/StyledSocialMediaContainer'
import StyledSocialMedia from '../StyledComps/StyledSocialMedia'
import StyledGreetings from '../StyledComps/StyledGreetings'
import StyledLink from '../StyledComps/StyledLink'
import StyledSocialMediaBox from '../StyledComps/StyledSocialMediaBox'
import StyledLastUpdateWrapper from '../StyledComps/StyledLastUpdateWrapper'
import StyledLastUpdateContent from '../StyledComps/StyledLastUpdateContent'
import StyledLastUpdateTitle from '../StyledComps/StyledLastUpdateTitle'
import StyledText from '../StyledComps/StyledText'

const Sidenav = ({ isOpen, changeTheme, mode }) => {
  const twitterUrl = 'https://twitter.com/SLinaresL'
  const githubUrl = 'https://github.com/sebaLinares'
  const linkedinUrl = 'https://www.linkedin.com/in/sebastián-linares-linares-2054a622/'

  return (
    <StyledSidenavContainer isOpen={isOpen}>
      <StyledSidenavInfo isOpen={isOpen}>
        <StyledChangeThemeButton className={mode} onClick={changeTheme} />
        <StyledGreetings>
          <StyledText>
            Esta aplicación obtiene su información desde
            <StyledLink target="_blank" href="https://farmanet.minsal.cl/maps/">
              {' '}
              un sitio MINSAL
              {' '}
              <span role="img" aria-label="finger pointing left">
                👈🏼
              </span>
            </StyledLink>
          </StyledText>
        </StyledGreetings>
        <br />
        <StyledGreetings>
          <StyledText>
            Si tu región o comuna no aparece en la lista, no significa que no existan farmacias de
            turno. Siempre tienes el número oficial de Salud Responde
            {' '}
            <StyledLink href="tel:600-360-7777"> 600 360 7777 </StyledLink>
            <span style={{ display: 'inline' }} role="img" aria-label="phone number">
              📞
            </span>
            {' '}
            para consultar por una comuna en específico! No dudes en llamar.
            {' '}
            <strong>
              Este número es el canal oficial para consultar por la farmacia de turno en tu comuna
            </strong>
          </StyledText>
        </StyledGreetings>
        <br />
        <StyledGreetings>
          <StyledText>
            Espero te haya sido útil!
            {' '}
            <span role="img" aria-label="man with macbook">
              👨🏽‍💻
            </span>
            {' '}
            Para ver el código de este proyecto
            {' '}
            <StyledLink
              target="_blank"
              href="https://github.com/sebaLinares/farmacia-de-turno-chile"
            >
              haz click aquí
              {' '}
              <span role="img" aria-label="finger pointing left">
                👈🏼
              </span>
            </StyledLink>
          </StyledText>
        </StyledGreetings>
        <br />
        {/* <StyledProfilePicture /> */}
        <StyledSocialMediaContainer>
          <StyledSocialMedia>
            <StyledLink target="_blank" href={githubUrl}>
              <StyledSocialMediaBox />
            </StyledLink>
            <StyledLink target="_blank" href={linkedinUrl}>
              <StyledSocialMediaBox />
            </StyledLink>
            <StyledLink target="_blank" href={twitterUrl}>
              <StyledSocialMediaBox />
            </StyledLink>
          </StyledSocialMedia>
        </StyledSocialMediaContainer>
        <StyledLastUpdateWrapper>
          <StyledLastUpdateTitle>última actualización</StyledLastUpdateTitle>
          <StyledLastUpdateContent>26 - 04 - 2020</StyledLastUpdateContent>
        </StyledLastUpdateWrapper>
      </StyledSidenavInfo>
    </StyledSidenavContainer>
  )
}

Sidenav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
}

export default Sidenav
