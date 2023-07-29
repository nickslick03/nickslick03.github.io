import resume from '../../resume.pdf'

const Resume = () => {

    return (
        <div class='flex justify-center'>
            <object 
                data={resume} 
                type="application/pdf"
                class="w-8/12 aspect-[16/21]"></object>
        </div>
    );
};

export default Resume;