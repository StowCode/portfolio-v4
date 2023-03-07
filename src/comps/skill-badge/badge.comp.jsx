import { motion } from 'framer-motion';

const SkillBadge = () => {
    return(
        <motion.div
            className='badge-flex'
            animate={{
                scale: [1, 1.1, 1],
                background: ['#e34f2680', '#e34f26', '#e34f2680' ]
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >

        </motion.div>
    )
}

export default SkillBadge;

