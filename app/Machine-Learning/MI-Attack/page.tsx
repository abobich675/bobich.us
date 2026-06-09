import Link from 'next/link'
import Image from 'next/image'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Machine-Learning" className='text-gray-500'> Machine Learning </Link> / Membership Inference Attack

      <div className="text-4xl pt-5"> Membership Inference Attack </div>

      <div className='flex'>
        <Link href="https://github.com/JonahSutch/mi_attack_replication" target="_blank" className='w-12 h-12 flex items-center justify-center rounded-full hover:bg-(--accent-color)/25'>
          <div className='w-1/2 h-1/2'><Image src="/icons/github.png" alt='github' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></div>
        </Link>

        <Link href="https://drive.google.com/file/d/12tfoeG18NE39B-J5KW9Bp8mcClNzSso6/view?usp=sharing" target="_blank" className='w-12 h-12 p-2 flex items-center justify-center rounded-full hover:bg-(--accent-color)/25'>
          <Image src="/icons/drive.png" alt='google drive' width={100} height={100} className='w-full h-full object-contain filter' />
        </Link>
      </div>
      
      <ImageColumn images={["/MI-Attack/1.png", "/MI-Attack/2.png", "/MI-Attack/3.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        This was a term project for AI 539 and my first deep dive into machine learning security research.
        I replicated the black-box membership inference attack from <Link href="https://arxiv.org/pdf/1610.05820" className='text-(--accent-color) hover:text-[#8855f0]'>Shokri et al. (2017)</Link>, which determines whether a specific data point was used to train a model — using only the model's confidence scores, with no access to its weights or training data.
        The pipeline runs end-to-end: train a target neural network on CIFAR-10, train 50 shadow models in parallel on an HPC SLURM cluster, train per-class attack multilayer perceptrons on the shadow outputs, then evaluate how accurately the attack can expose the target model's training set.
        This project gave me hands-on experience with machine learning privacy vulnerabilities, distributed GPU training, and empirically validating published research results.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          My Contributions:
        </div>
        Beyond contributing to the core replication, I extended the project by investigating a key limitation in our setup:
        the shared attack models were trained entirely on shadow models of size n=2,500, meaning they may not accurately reflect the confidence distributions of larger target models with smaller generalization gaps.
        My fix was to train a dedicated set of attack models per target size, with shadow models matched to the same training size as the target.
        This produced attack classifiers tuned to the specific overfitting behavior of each target, improving precision by up to 7% over the baseline approach.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Abstract:
        </div>
        A replication of the landmark 2017 membership inference attack against machine learning models.
        By training shadow models that mimic a target neural network, an attack classifier learns to distinguish members from non-members using only confidence vectors.
      </ImageColumn>
    </div>
  )
}