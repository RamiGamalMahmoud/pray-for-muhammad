import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="link">
      <h1>
        <span className="aya">《 إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا 》</span>
        <span>👇👇👇👇👇👇👇</span>
        <Link to="/prayer">أدخل هنا لتسجل صلاتك على النبي</Link>
        <span>👆👆👆👆👆👆👆</span>
      </h1>
    </div>
  );
}