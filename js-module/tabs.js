export const initTabs = () => {
    const tab_btn = document.querySelectorAll('.tab_btn');
    const tab_content = document.querySelectorAll('.tab-content');




    console.log(tab_btn);
    if(tab_btn.length > 0 && tab_content.length > 0) {

        tab_btn[0].classList.add('active');
        tab_content[0].classList.add('active');
        
        tab_btn.forEach(btn => {
            btn.addEventListener('click', (e) => {

                const current_btn = e.currentTarget;
                const current_btn_id = current_btn.dataset.targetId;
                
                const matching_tab_content = Array.from(tab_content).find(
                    content => content.dataset.id === current_btn_id
            );

            if (current_btn.classList.contains('active')) {
                return; 
            } else {
                tab_btn.forEach(b => b.classList.remove('active'));
                tab_content.forEach(c => c.classList.remove('active'));
                
                current_btn.classList.add('active');
                matching_tab_content.classList.add('active');
            }
        })
    });
    }
};

