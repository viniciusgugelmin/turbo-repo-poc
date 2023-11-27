import tw, { styled } from 'twin.macro'
import { Input } from ".."

const Header = styled.header`
    ${tw`bg-blue-600 h-16 flex gap-4 items-center justify-around`}
`

const Logo = styled.img`
    width: 150px;
`

const HeaderPresentation = ({ navbar }) => {

    return (
        <Header>
            <Logo
                alt="Logo Oystr"
                src="https://console4.oystr.com.br/brands/oystr/logo-02.svg"
            />
            <nav className='flex gap-4 text-white'>
                {navbar.map(({ label }, index) =>
                    <div key={`header-buttons-${index}`} className='flex justify-center flex-col items-center'>
                        <div children={label} className='text-sm' />
                    </div>
                )}
            </nav>
            <div className='flex gap-4 items-center'>
                <Input placeholder="Buscar por um robô..." search />
                <span className='text-white'>user@email.com</span>
            </div>
        </Header>
    )
}

export default HeaderPresentation
