import Page from "@/components/page";
import { AuthService } from "@/domains/auth/services/auth-service";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const { authUrl: kakaoLoginUrl } = await AuthService.fetchKakaoLoginUrl();
  return (
    <Page className="bg-white flex flex-col items-center gap-5 p-5">
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        <svg
          width="201"
          height="78"
          viewBox="0 0 201 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88.3177 47.7346C89.7096 49.0273 89.9084 50.9663 88.5663 52.3088C87.3733 53.502 85.4346 53.3529 83.9434 52.3585C82.4521 51.3641 81.2592 50.668 79.1714 50.668C77.7299 50.668 76.338 51.0161 76.338 52.3088C76.338 53.502 77.1334 53.9992 78.4258 54.397L82.4024 55.5405C86.3791 56.684 90.3558 58.7722 90.3558 63.1475C90.3558 68.4177 85.7826 70.5556 79.9667 70.5556C75.2942 70.5556 71.2678 69.4618 69.2795 66.8764C68.0368 65.186 67.8379 63.2469 69.3292 62.004C70.8204 60.7113 73.0573 61.0593 74.4988 62.7C75.8907 64.2413 77.9287 64.9374 79.7679 64.9374C81.6071 64.9374 83.1481 64.3408 83.1481 63.0978C83.1481 61.9542 81.8059 61.6062 80.4638 61.1587L76.1889 59.9158C72.4608 58.8219 69.1303 56.684 69.1303 52.3088C69.1303 47.0385 74.1509 45.0001 79.4199 45.0001C83.6452 45.0001 86.5282 46.1436 88.3177 47.7346Z"
            fill="#10257B"
          />
          <path
            d="M92.8489 66.3295V36.0507C92.8489 33.7139 94.2905 32.2223 96.6268 32.2223C98.9631 32.2223 100.355 33.7139 100.355 36.0507V48.2318C101.598 46.243 104.481 45.0001 107.066 45.0001C112.533 45.0001 116.162 48.9776 116.162 54.4964V66.3295C116.162 68.6663 114.721 70.1082 112.384 70.1082C110.048 70.1082 108.656 68.6663 108.656 66.3295V55.1427C108.656 52.9054 106.916 51.1155 104.481 51.1155C102.194 51.1155 100.355 52.7562 100.355 55.093V66.3295C100.355 68.6663 98.9631 70.1082 96.6268 70.1082C94.2905 70.1082 92.8489 68.6663 92.8489 66.3295Z"
            fill="#10257B"
          />
          <path
            d="M143.434 49.2759V66.4787C143.434 68.8155 142.042 70.1082 139.706 70.1082C137.618 70.1082 136.574 68.7657 136.276 67.0256C135.232 69.1635 132.896 70.5556 129.317 70.5556C122.904 70.5556 118.629 64.9374 118.629 57.6784C118.629 50.4194 122.904 45.0001 129.068 45.0001C132.647 45.0001 135.083 46.3922 136.276 48.3312C136.524 46.6408 137.618 45.3978 139.755 45.3978C142.092 45.3978 143.434 46.9391 143.434 49.2759ZM125.986 57.7778C125.986 61.6062 128.074 64.3905 131.156 64.3905C134.238 64.3905 136.226 61.6062 136.226 57.7778C136.226 53.9495 134.238 51.1652 131.156 51.1652C128.074 51.1652 125.986 53.9495 125.986 57.7778Z"
            fill="#10257B"
          />
          <path
            d="M157.669 51.2647C155.581 51.2647 154.438 52.9551 154.438 55.3416V66.3295C154.438 68.6663 153.046 70.1082 150.71 70.1082C148.373 70.1082 146.932 68.6663 146.932 66.3295V49.2262C146.932 46.8894 148.274 45.3978 150.61 45.3978C152.698 45.3978 153.99 46.4419 154.239 48.8781C154.786 46.5911 156.973 45.0001 159.608 45.0001C160.999 45.0001 162.143 45.1989 163.435 45.7956C164.926 46.4916 165.771 47.9832 165.075 49.7731C164.33 51.563 162.689 52.2093 160.801 51.7619C159.806 51.5133 158.812 51.2647 157.669 51.2647Z"
            fill="#10257B"
          />
          <path
            d="M171.129 54.745H181.568C181.568 52.4082 179.132 50.6183 176.348 50.6183C173.565 50.6183 171.129 52.4082 171.129 54.745ZM186.489 67.5228C184.202 69.6607 180.822 70.5556 177.044 70.5556C168.644 70.5556 164.12 65.186 164.12 57.6287C164.12 50.32 168.892 45.0001 176.348 45.0001C183.954 45.0001 188.278 50.1708 188.278 55.6896C188.278 58.4242 187.334 59.6672 184.6 59.6672H171.129C171.129 62.4514 173.714 64.7882 177.044 64.7882C179.629 64.7882 181.22 63.8933 182.81 62.6006C184.202 61.4073 186.24 61.3576 187.433 62.7995C188.676 64.1916 187.98 66.1306 186.489 67.5228Z"
            fill="#10257B"
          />
          <path
            d="M68.1779 32.524C67.7485 32.6709 67.3622 32.955 67.091 33.3617L67.0884 33.3655L67.0721 33.3897C67.0661 33.3985 67.0589 33.4092 67.0503 33.4217C67.0367 33.4417 67.0197 33.4664 66.9996 33.4955C66.9341 33.5905 66.835 33.7323 66.7061 33.9116C66.4479 34.2707 66.0727 34.7771 65.6112 35.3563C64.6756 36.5304 63.4382 37.9364 62.1402 39.0295C60.9254 40.0525 58.5678 41.2791 56.4649 41.2791C55.4878 41.2791 54.6339 41.0183 53.9098 40.4074C53.2734 39.8704 52.5948 38.9418 52.0762 37.3361C52.5493 37.2911 53.0223 37.1957 53.4904 37.0397C56.1759 36.1445 58.5292 34.847 59.8946 32.9194C61.3945 30.8018 61.4434 28.3096 60.2497 25.8227C59.419 24.092 57.7631 23.1572 56.1039 22.9006C54.4359 22.6426 52.6017 23.0236 51.0241 24.0622C48.8469 25.4955 47.3704 27.9779 47.0818 31.3933C45.7298 30.5253 44.4345 29.4588 43.394 28.4991C42.2763 27.4683 40.9148 27.8665 40.2715 28.3189C39.6286 28.771 38.8016 29.9071 39.3747 31.3003C41.1744 35.6756 41.3802 39.0459 40.958 40.9981C40.7545 41.9385 40.4501 42.3632 40.3062 42.5019C40.2899 42.4929 40.2595 42.4743 40.2155 42.4399C40.1441 42.3841 40.0491 42.2962 39.9339 42.164C39.6985 41.8937 39.4348 41.5029 39.1549 40.9841C38.5927 39.9422 38.0802 38.602 37.6258 37.2112C37.2495 36.0591 36.9353 34.9436 36.6692 33.9989C36.6159 33.8098 36.5645 33.6273 36.515 33.453C36.3735 32.9548 36.2333 32.4728 36.1065 32.1139C36.0493 31.9519 35.9567 31.7029 35.8273 31.4685C35.7726 31.3694 35.627 31.1138 35.3688 30.8696C35.1474 30.6603 34.3196 29.9949 33.1735 30.3769C32.2423 30.6873 31.8578 31.4664 31.7726 31.6389L31.7698 31.6447C31.6288 31.9299 31.5362 32.229 31.4744 32.4483C31.366 32.8325 31.2528 33.3447 31.1328 33.8877C31.1128 33.9782 31.0925 34.0697 31.0722 34.1615C30.7725 35.5099 30.3322 37.416 29.5251 39.8373C29.2465 40.6731 29.0143 41.3298 28.7945 41.8474C28.6917 42.0895 28.6024 42.2746 28.5272 42.4148C28.0892 41.9791 27.6061 41.0946 27.2555 39.5891C26.8537 37.8633 26.7421 35.8111 26.8136 34.0233C26.9155 31.4744 28.1787 28.8355 28.7747 27.8988C29.4096 26.9011 29.1155 25.5777 28.1178 24.9428C27.1201 24.3079 25.7966 24.602 25.1617 25.5997C24.3303 26.9062 22.6773 30.2832 22.5345 33.8521C22.4531 35.888 22.5694 38.3476 23.0846 40.5602C23.5711 42.6497 24.5465 45.1022 26.6482 46.3371L26.7395 46.3907L26.8356 46.4351C27.5599 46.7694 28.4433 47.0115 29.3985 46.8359C30.3941 46.6529 31.1175 46.0827 31.6221 45.4703C32.0999 44.8905 32.4518 44.1915 32.7364 43.5212C33.028 42.8343 33.3057 42.038 33.5878 41.1915C33.7407 40.7329 33.8814 40.2912 34.0113 39.8671C34.4043 40.948 34.8609 42.0444 35.386 43.0175C36.0685 44.2826 37.1154 45.825 38.6989 46.4728C40.2383 47.1025 41.8359 46.8266 43.0604 45.7829C44.1681 44.8387 44.8174 43.4119 45.1436 41.9035C45.5431 40.0565 45.5347 37.763 45.0215 35.1572C45.384 35.3835 45.7532 35.5999 46.1268 35.8022C46.5386 36.0253 46.9763 36.2426 47.4336 36.4408C47.5049 36.7931 47.5859 37.1515 47.677 37.516C48.3644 40.2654 49.5339 42.3183 51.148 43.6803C52.7802 45.0576 54.6697 45.5616 56.4649 45.5616C59.9062 45.5616 63.2076 43.7293 64.8987 42.3052C66.0219 41.3594 67.0627 40.2678 67.9339 39.2617C65.831 52.4676 54.3492 62.5629 40.5004 62.5629C35.2859 62.5629 30.4069 61.1316 26.2378 58.6418C25.5543 58.2336 24.6434 58.5076 24.4344 59.2759C24.0364 60.7382 23.9969 62.0631 24.2007 63.6047C24.3204 64.5097 23.1875 65.0546 22.6424 64.3223C12.7227 50.9966 12.7227 39.9535 12.7227 34.8926C12.7227 19.6107 25.1592 7.22229 40.5004 7.22229C55.0407 7.22229 66.9717 18.3509 68.1779 32.524Z"
            fill="#5C3BF3"
          />
          <path
            d="M52.1362 32.977C51.9045 33.0542 51.6295 33.0913 51.3119 33.0815C51.1895 29.8544 52.4034 28.2814 53.3789 27.6392C54.0954 27.1674 54.8614 27.0418 55.4493 27.1327C56.046 27.225 56.302 27.4947 56.3889 27.6758C57.0306 29.0126 56.85 29.8087 56.4 30.4441C55.8153 31.2695 54.4978 32.1897 52.1362 32.977Z"
            fill="#5C3BF3"
          />
        </svg>
        <h1 className="text-heading-1 mt-5">간편한 공용물품 관리의 시작</h1>
      </div>

      <div className="flex flex-col gap-3 w-full mb-10">
        <a
          className="bg-[#ffe812] text-body-1 text-black py-3.5 px-4.5 flex items-center justify-center gap-1 rounded-sm"
          href={kakaoLoginUrl}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6C9.61355 6 5.24707 9.44286 5.24707 13.6898C5.24707 16.4355 7.07255 18.8447 9.81855 20.2052C9.66916 20.7204 8.85854 23.5196 8.82628 23.7396C8.82628 23.7396 8.80687 23.9048 8.91387 23.9678C9.02087 24.0308 9.14672 23.9819 9.14672 23.9819C9.45356 23.939 12.7049 21.6552 13.2677 21.2586C13.8299 21.3382 14.4088 21.3795 15 21.3795C20.3864 21.3795 24.7528 17.9368 24.7528 13.6898C24.7528 9.44286 20.3864 6 15 6Z"
              fill="black"
            />
          </svg>

          <span>카카오로 시작하기</span>
        </a>
        {/* <button className="bg-[#03c95b] text-body-1 text-white py-3.5 px-4.5 flex items-center justify-center gap-1 rounded-sm">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.493 8V15.493L12.303 8H8V22H12.507V14.507L17.697 22H22V8H17.493Z"
              fill="white"
            />
          </svg>

          <span>네이버로 시작하기</span>
        </button> */}
      </div>
    </Page>
  );
}
