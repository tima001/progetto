import React from 'react'
import logo from '../../../assets/icons/whitelogo.svg'
import '../style'
import {
    EnvelopeSimple,
    MapPin,
    Phone,
    WhatsappLogo,
} from '@phosphor-icons/react'
import {
    StyledCompanyInfo,
    StyledFooter,
    StyledFooterContent,
    StyledFooterContentGrid,
    StyledLogo,
    StyledMailInfo,
} from '../style'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterContent>
                <StyledFooterContentGrid>
                    <StyledLogo
                        src={logo}
                        alt="logo"
                    />
                    <StyledMailInfo>
                        <EnvelopeSimple
                            className="footer-icon"
                            size={24}
                            color="white"
                            weight="regular"
                            style={{ marginRight: '20px' }}
                        />
                        eduonline@gmail.com
                    </StyledMailInfo>
                    <StyledMailInfo>
                        <MapPin
                            size={24}
                            color="white"
                            weight="regular"
                            style={{ marginRight: '20px' }}
                        />
                        4-микрорайон, 11
                    </StyledMailInfo>
                    <StyledMailInfo>
                        <Phone
                            className="footer-icon"
                            size={24}
                            color="white"
                            weight="regular"
                            style={{ marginRight: '20px' }}
                        />
                        +7 776 776 7766
                    </StyledMailInfo>
                    <StyledMailInfo>
                        <WhatsappLogo
                            className="footer-icon"
                            size={24}
                            color="white"
                            weight="regular"
                            style={{ marginRight: '20px' }}
                        />
                        Whatsapp-қа жазыныз
                    </StyledMailInfo>
                </StyledFooterContentGrid>
                <StyledCompanyInfo>
                    © ТОО EduOnline 2023. Барлық құқықтар қорғалған.
                </StyledCompanyInfo>
            </StyledFooterContent>
        </StyledFooter>
    )
}

export default Footer
