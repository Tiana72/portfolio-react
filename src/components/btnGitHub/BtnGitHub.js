import './style.css';
import gitLogo from './github-black.svg';

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitLogo} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;