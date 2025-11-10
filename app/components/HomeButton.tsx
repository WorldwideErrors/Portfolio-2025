import CircularText from '../../components/CircularText';

export default function HomeButton() {
  return (
    
    <CircularText
    text="HOME*HOME*HOME*"
    onHover="speedUp"
    spinDuration={20}
    className="custom-class"
    />
  );
}