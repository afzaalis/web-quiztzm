import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/rules.css'

export const Rule = () => {
    const [showModal, setShowModal] = useState(false);
    const Navigate = useNavigate();
    const rules = [
        "1. Anda hanya memiliki 05 detik untuk setiap pertanyaan",
        "2. Anda tidak dapat memilih opsi apapun setelah waktu habis.",
        "3: Setelah kuis dimulai, anda tidak dapat membuka halaman lain.",
        "4: Jika anda melanggar poin 3, itu akan dianggap melanggar aturan.",
        "5. Jika dua pelanggaran dihitung, Anda akan dikeluarkan.",
        "6: Anda tidak dapat keluar dari kuis selama kuis sedang berlangsung.",
        "7: Anda akan pendapatkan Poin berdasarkan jawaban yang benar.",
    ];

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const goToQuiz = () => {
        Navigate("/kuis")
    }
    const keluarDashBoard = () => {
        Navigate('/')
    }
    return (
        <div>
            <div className="btn-penting" style={{padding:'20px'}}>
            <button onClick={openModal}>Lihat aturan</button>
            <button style={{backgroundColor:'#0097a7ff' ,
                 border:'2px solid white',marginLeft:'10px'}}
                 onClick={keluarDashBoard}
                 >Keluar</button>
                </div>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Rules</h2>
                        <ul style={{listStyleType:'none'}}>
                            {rules.map((rule, index) => (
                               <li key={index}>
                               <span style={{ color: 'red' }}>{index + 1}. </span>
                               {rule.substring(3)}
                           </li>
                            ))}
                        </ul>
                        <button onClick={goToQuiz}>Mulai</button>
                        <button onClick={closeModal} style={{backgroundColor:'white',
                             borderColor:'#0097a7ff',
                             color:'#0097a7ff',
                             border:'1px solid'}}>Keluar</button>
                    </div>
                </div>
            )}
        </div>
    );
};
