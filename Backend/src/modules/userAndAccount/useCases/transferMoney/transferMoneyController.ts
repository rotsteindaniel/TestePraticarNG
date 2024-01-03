import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
// import { UserAlreadyExistsError } from "@/shared/errors/user-already-exists-error";

// import { makeRegisterUserAndAccountUseCase } from "../factories/makeRegisterUserAndAccountUseCase";
// import { makeSeeUserBalanceUseCase } from "../factories/makeSeeUserBalanceUseCase";
import { makeTransferMoneyUseCase } from "../factories/makeTransferMoneyUseCase";

export async function transferMoneyController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const transferMoneyBodySchema = z.object({
    targetUsername: z.string().min(3, { message: "Username needs to be at least 3 characters" }),
    amount: z
      .number()
      .refine(value => value > 0, { message: "Amount needs to be a positive number" }),
  });


  const transferMoneyUseCase = makeTransferMoneyUseCase();

  const sourceAccountId = request.user.accountId;
  const { targetUsername, amount } = transferMoneyBodySchema.parse(request.body);

  await transferMoneyUseCase.execute({
    sourceAccountId,
    targetUsername,
    amount,
  });

  return reply
    .status(200)
    .send({ message: "Transferência realizada com sucesso." });
}
