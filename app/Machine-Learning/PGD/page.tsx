import Link from 'next/link'
import ImageColumn from '@/components/ImageColumn'
 
export default function Page() {
  return(
    <div className='p-5 sm:p-12.5 lg:p-20 pt-5 sm:pt-5 lg:pt-5 pr-0 sm:pr-0 lg:pr-0'>
      <Link href="/Machine-Learning" className='text-gray-500'> Machine Learning </Link> / Projected Gradient Descent Attack

      <div className="text-4xl pt-5"> Projected Gradient Descent </div>
      
      <ImageColumn images={["/PGD/1.png", "/PGD/2.png", "/PGD/3.png"]}>
        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 text-gray-200'>
          Description:
        </div>
        This was my first hands-on implementation of adversarial machine learning where I implemented the PGD (projected gradient descent) white-box attack from <Link href="https://arxiv.org/abs/1706.06083" className='text-(--accent-color) hover:text-[#8855f0]'>Madry et al.</Link> against LeNet on MNIST and ResNet18 on CIFAR-10, then systematically analyzed how attack hyperparameters, training augmentations, and regularization techniques affect a model's vulnerability.
        Finally, I defended both models using adversarial training, reducing the accuracy gap from ~45–65% down to just 2–13% with nearly no cost to clean accuracy.
        This project gave me hands-on experience with adversarial example crafting, robustness evaluation, and the practical tradeoffs between model utility and security.

        <div className='text-lg lg:text-2xl pb-3 sm:pb-3 lg:pb-5 pt-3 lg:pt-5 text-gray-200'>
          Abstract:
        </div>
        An implementation and analysis of PGD adversarial attacks on image classifiers.
        By iteratively perturbing inputs within a bounded ε-ball, the attack reliably fools undefended models.
        Training models on these attack-generated examples produces models robust to PGD with minimal clean accuracy sacrifice.

        <br/>
        <br/>

        <table className='border-collapse [&_td]:border [&_td]:border-gray-600 [&_td]:p-2 [&_td]:w-1/3 [&_th]:border [&_th]:border-gray-600 [&_th]:p-2 [&_th]:w-1/3 w-full'>
          <thead>
            <tr>
              <th></th>
              <th>LeNet - MNIST</th>
              <th>Resnet18 - CIFAR10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clean Accuracy</td>
              <td>99.41%</td>
              <td>88.31%</td>
            </tr>
            <tr>
              <td>Adversarial Accuracy</td>
              <td>54.78%</td>
              <td>23.37%</td>
            </tr>
            <tr className='bg-red-500/20'>
              <td>Accuracy Difference</td>
              <td>44.63%</td>
              <td>64.94%</td>
            </tr>
          </tbody>
        </table>

        <br/>
        <br/>

        <table className='border-collapse [&_td]:border [&_td]:border-gray-600 [&_td]:p-2 [&_td]:w-1/3 [&_th]:border [&_th]:border-gray-600 [&_th]:p-2 [&_th]:w-1/3 w-full'>
          <thead>
            <tr>
              <th>Adversarially Trained</th>
              <th>LeNet - MNIST</th>
              <th>Resnet18 - CIFAR10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clean Accuracy</td>
              <td>99.50%</td>
              <td>86.75%</td>
            </tr>
            <tr>
              <td>Adversarial Accuracy</td>
              <td>97.43%</td>
              <td>72.97%</td>
            </tr>
            <tr className='bg-red-500/20'>
              <td>Accuracy Difference</td>
              <td>2.07%</td>
              <td>13.78%</td>
            </tr>
          </tbody>
        </table>
      </ImageColumn>
    </div>
  )
}